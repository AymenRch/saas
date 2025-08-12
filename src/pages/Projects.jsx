import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, FolderOpen, Calendar, MoreVertical, Eye, Edit3, Trash2, HelpCircle, FileText, LogOut, User, X } from "lucide-react";
import axios from "axios";
import { FaBars, FaTimes } from "react-icons/fa";

 

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([
    {
      id: '1',
      name: 'Creative Portfolio',
      description: 'My main portfolio showcasing design work and projects',
      createdAt: '2024-01-15',
      lastModified: '2024-01-20',
      template: 'Creative',
      status: 'published'
    },
    {
      id: '2',
      name: 'Photography Portfolio',
      description: 'Collection of my best photography work and artistic shots',
      createdAt: '2024-01-10',
      lastModified: '2024-01-18',
      template: 'Photography',
      status: 'draft'
    },
    {
      id: '3',
      name: 'Developer Portfolio',
      description: 'Showcasing my web development projects and coding skills',
      createdAt: '2024-01-05',
      lastModified: '2024-01-15',
      template: 'Developer',
      status: 'published'
    },
    {
      id: '4',
      name: 'Minimal Portfolio',
      description: 'Clean and simple portfolio with focus on content',
      createdAt: '2024-01-01',
      lastModified: '2024-01-12',
      template: 'Minimal',
      status: 'draft'
    },
    {
      id: '5',
      name: 'Modern Portfolio',
      description: 'Contemporary design with interactive elements',
      createdAt: '2023-12-28',
      lastModified: '2024-01-08',
      template: 'Modern',
      status: 'published'
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    template: 'Modern'
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fetch user projects on component mount
  // useEffect(() => {
  //   fetchProjects();
  // }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await axios.get('http://localhost:8000/api/projects', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setProjects(response.data.projects || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      if (error.response?.status === 401) {
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async () => {
    /*if (!newProject.name.trim()) {
      alert("Project name is required");
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8000/api/projects', {
        name: newProject.name,
        description: newProject.description,
        template: newProject.template
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 201) {
        setProjects([response.data.project, ...projects]);
        setNewProject({ name: '', description: '', template: 'Modern' });
        setIsCreateDialogOpen(false);
        alert("Project created successfully!");
      }
    } catch (error) {
      console.error('Error creating project:', error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Failed to create project. Please try again.');
      }
    }
  };

  const handleDeleteProject = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8000/api/projects/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setProjects(projects.filter(p => p.id !== id));
      alert("Project deleted successfully!");
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project. Please try again.');
    }*/
   navigate('/build')
  };

  const handleLogout = () => {
    //localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    return status === 'published'
      ? 'bg-green-400/20 text-green-300 border border-green-400/30'
      : 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="page min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header - translucent like Home.jsx */}
      <nav className="header fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo / Title */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <FolderOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">My Projects</span>
            </div>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setIsCreateDialogOpen(true)}
                className="flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-4 py-2 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </button>
              <div className="flex items-center space-x-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
                <div className="w-9 h-9 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">John Doe</div>
                  <div className="text-[10px] text-white/70">john@example.com</div>
                </div>
              </div>
            </div>

            {/* Hamburger */}
            <div className="hamburger md:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <FaTimes size={20} style={{ color: "white" }} />
              ) : (
                <FaBars size={20} style={{ color: "white" }} />
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={
              isMobileMenuOpen
                ? "md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/20 transition-all duration-300 ease-in-out"
                : "md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/20 opacity-0 pointer-events-none transition-all duration-300 ease-in-out"
            }
          >
            <div className="px-4 py-6 space-y-4">
              <div className="flex items-center space-x-3 p-3 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">John Doe</div>
                  <div className="text-xs text-white/70">john@example.com</div>
                </div>
              </div>
              <button
                onClick={() => { setIsCreateDialogOpen(true); setIsMobileMenuOpen(false); }}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Plus className="w-5 h-5 mr-2" />
                New Project
              </button>
              <button
                onClick={handleLogout}
                className="w-full butn text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        {projects.length === 0 ? (
          <div className="text-center py-20">
            <FolderOpen className="w-20 h-20 text-white/40 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-3">No projects yet</h3>
            <p className="text-white/70 mb-8 text-lg">Create your first portfolio project to get started.</p>
            <button
              onClick={() => setIsCreateDialogOpen(true)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus className="w-5 h-5" style={{marginRight:"5px"}} />
              Create Your First Project
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden group  ">
                <div className="p-6 sm:p-8 relative">
                  <button className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-xl transition-colors opacity-0 group-hover:opacity-100">
                    <MoreVertical className="w-5 h-5 text-white/70" />
                  </button>
                  <div className="mb-4">
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug break-words">{project.name}</h3>
                      <p className="text-white/80 text-base leading-relaxed mb-3 w-full break-normal">
                        {project.description || 'No description provided'}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
                            {project.template}
                          </span>
                      </div>
                        <div className="flex items-center text-xs sm:text-sm text-white/60 gap-4">
                    <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1.5" />
                      <span>Created {formatDate(project.createdAt)}</span>
                    </div>
                    <div>
                      <span>Modified {formatDate(project.lastModified)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={()=>{navigate('/build')}} className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center space-x-2">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Edit
                    </button>
                    <button className="flex-1 bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Create Project Modal */}
      {isCreateDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Create New Project</h2>
              <button
                onClick={() => setIsCreateDialogOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  placeholder="Enter project name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description (Optional)
                </label>
                <input
                  type="text"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  placeholder="Brief description of your project"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Template
                </label>
                <select
                  value={newProject.template}
                  onChange={(e) => setNewProject({ ...newProject, template: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-base bg-white"
                >
                  <option value="Modern">Modern</option>
                  <option value="Creative">Creative</option>
                  <option value="Minimal">Minimal</option>
                  <option value="Photography">Photography</option>
                  <option value="Developer">Developer</option>
                </select>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  onClick={handleCreateProject}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Create Project
                </button>
                <button
                  onClick={() => setIsCreateDialogOpen(false)}
                  className="flex-1 border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <style>{`
        .butn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(108px);
        }

        .hamburger {
          cursor: pointer;
          z-index: 10;
        }

        .header {
          position: relative;
        }
      `}
    </style>
    </>
  );
};

export default Projects;

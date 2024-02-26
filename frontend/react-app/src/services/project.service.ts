import { QueryFunctionContext } from 'react-query';
import { EntityService } from './entityService';
import { Projects } from 'store/dummy-data';
import axios from 'axios';

class ProjectsService extends EntityService {
  constructor() {
    super('projects');
  }

  getProjects = async (id: QueryFunctionContext<'postsData', any>) => {
    const response = await axios.get<{ projects: Projects[] }>(`http://localhost:5000/api/projects/${id}`);
    return response.data;
  };
}

export const projectsService = new ProjectsService();

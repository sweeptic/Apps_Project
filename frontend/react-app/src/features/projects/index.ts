import { useQueryClient, useQuery } from 'react-query';
import { projectsService } from 'services/project.service';

export const useGetPostById = (id: any) => {
  const { data: post } = useQuery(['posts', id], () => projectsService.getProjects(id), {
    enabled: !!id,
  });
  return {
    post,
  };
};

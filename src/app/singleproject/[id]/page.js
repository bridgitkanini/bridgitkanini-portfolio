import SingleProject from "@/app/components/SingleProject";
import { personalProjects } from "@/app/components/ProjectsData";

// This function generates the paths for all the dynamic routes
export async function generateStaticParams() {
  return personalProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

// This is the dynamic route component
const SingleProjectPage = ({ params }) => {
  const project = personalProjects.find((p) => p.id.toString() === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <SingleProject project={project} />;
};

export default SingleProjectPage;

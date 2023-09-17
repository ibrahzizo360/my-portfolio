
import ProjectsBtn from '../components/ProjectsBtn'


const Home = () => {
  return (
  <div className="bg-primary/60 h-full">
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30
    to-black/10'>
      <div className="text-center flex flex-col justify-center xl:pt-40
      xl:text-left h-full container mx-auto">
      {/* title */}
      <h1 className="h1">
        Transforming Ideas <br /> Into {' '}
          <span className='text-accent'>Digital Reality</span>
      </h1>
      {/* subtitle */}
      <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
        I'm a full-stack developer based in the Philippines. I specialize in
        building exceptional digital experiences. Currently, I'm focused on
        building accessible, human-centered products at{' '}
        <span className='text-accent'>Upwork</span> for a diverse range of
        clients.
      </p>
      {/* button */}
      <div>
        <ProjectsBtn  />
      </div>
      </div>
    </div>
    {/* image */}
    <div>image</div> 
  </div>
  );
};

export default Home;

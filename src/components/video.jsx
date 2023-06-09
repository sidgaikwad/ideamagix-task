import video from "../assets/video.mp4";

const Video = () => {
  return (
    <div class="p-4 w-full h-auto  border-b-2 border-dotted  border-blue-400 mb-1 bg-white ">
      <div className="flex flex-row  items-center justify-between ">
        <div>
          <video width="750" height="auto" controls >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div>
          <h1 className="font-bold text-3xl mx-4  ">Donation</h1>
          <p className="my-3 mx-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            explicabo, quis quos quod eum, autem numquam <br /> ex debitis animi
            doloribus dolor error nam consequatur odit, aspernatur id molestias
            soluta velit!
          </p>
          <div className="mx-4">
          <a
            href="/"
            className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-200  px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
          >
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
            Donate
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

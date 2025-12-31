// /* eslint-disable @next/next/no-img-element */

function Card2(props) {
console.log(props);

return (
  <div className="max-w-svh rounded-md shadow-md bg-black text-gray-100 m-2">
    <img
      src="https://picsum.photos/301"
      alt=""
      className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
    />
    <div className="flex flex-col justify-between p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-wide">Lorem</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          tempora ipsum soluta amet corporis accusantium aliquid consectetur
          eaque!
        </p>
      </div>
      <button className="self-center px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">
        Button
      </button>
    </div>
  </div>
);
}

export default Card2;
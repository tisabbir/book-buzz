const Dropdown = () => {
  return (
    <div>
      <div className="flex justify-center mt-12">
        <button className="text-center">
          <details>
            <summary className="text-white rounded-xl bg-[#23BE0A] py-4 px-10 font-bold  ">
              Short By
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              <li>
                <button className="btn w-full">Rating</button>
              </li>
              <li>
                <button className="btn w-full">Number of Pages</button>
              </li>
              <li>
                <button className="btn w-full">Published Year</button>
              </li>
            </ul>
          </details>
        </button>
      </div>
    </div>
  );
};

export default Dropdown;

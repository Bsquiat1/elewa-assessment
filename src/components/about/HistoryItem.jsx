const HistoryItem = ({ year, title, children }) => {
    return (
      <div className="w-1/4 relative">
        <div className="w-12 h-12 bg-black rounded-full mb-20 ml-20"></div>
        <div className="ml-20">
          <div className="text-2xl font-normal mb-2">{year}</div>
          <h2 className="font-bold text-3xl mt-10">{title}</h2>
          <p className="mt-10 text-lg">{children}</p>
        </div>
      </div>
    );
  };

  export default HistoryItem
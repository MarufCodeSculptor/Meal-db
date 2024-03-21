const Nav = () => {
  return (
    <div className="sticky top-0 w-full bg-white">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            Delish <span className="text-purple-700">Direct</span>
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-outline">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;

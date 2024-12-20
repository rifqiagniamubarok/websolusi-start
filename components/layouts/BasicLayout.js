import Navbar from '../items/Navbar';

const BasicLayout = ({ children }) => {
  return (
    <div>
      <div id="w-screen h-screen bg-secondary">
        <Navbar />
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default BasicLayout;

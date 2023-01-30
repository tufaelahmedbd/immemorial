const Blog = ({ needFullHeight }) => {
  return (
    <section className={`${needFullHeight && "min-h-100vh"} blog wrapper`}>
      <h2 className="section-title">Blog</h2>
      <h2 className="updated-later">Updated later...</h2>
    </section>
  );
};

export default Blog;

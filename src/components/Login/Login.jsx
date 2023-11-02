const Login = () => {
  return (
    <div className="w-50 mx-auto">
      <h2 className="my-5 text-center">PMSPlatform</h2>
      <div className="mb-3">
        <label className="form-label">Your Name</label>
        <input type="text" className="form-control" placeholder="Name" />
      </div>
      <div className="mb-3">
        <label className="form-label">Your Email</label>
        <input type="email" className="form-control" placeholder="Email" />
      </div>
      <div className="mb-3">
        <label className="form-label">Your Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button type="button" className="btn btn-primary">Login</button>
    </div>
  );
};

export default Login;

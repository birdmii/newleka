import loginStyle from "../styles/Login.module.css";

const LoginForm = ({ handleUsername, handlePassword, handleSubmit, error }) => {
  return (
    <div
      className={`w-100 flex-vertical-center flex-col ${loginStyle["Admin__panel"]}`}
    >
      <img
        src="/logo.png"
        alt="NEW・LE・KA Logo"
        width={127}
        height={32}
        className={`mt-80 mb-24`}
      />
      <div className={`subtitle mb-80 ${loginStyle["panel__msg"]}`}>
        Sign in to NEW・LE・KA
      </div>
      {error && (
        <div className={`mb-24 ${loginStyle["panel__errorMsg"]}`}>{error}</div>
      )}
      <div className={``}>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className={`flex flex-col border-rad-16 ${loginStyle["panel__loginForm"]}`}
        >
          <label
            htmlFor="username"
            className={`body-text2 ${loginStyle["panel__loginForm--label"]}`}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={`border-rad-8 shadow-2 ${loginStyle["panel__loginForm--input"]}`}
            placeholder="Username"
            onChange={(e) => handleUsername(e)}
          ></input>
          <label
            htmlFor="password"
            className={`body-text2 mt-24 ${loginStyle["panel__loginForm--label"]}`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`border-rad-8 shadow-2 ${loginStyle["panel__loginForm--input"]}`}
            placeholder="Password"
            onChange={(e) => handlePassword(e)}
          ></input>
          <button
            type="submit"
            className={`mt-24 border-rad-8 ${loginStyle["panel__loginForm--btn"]}`}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

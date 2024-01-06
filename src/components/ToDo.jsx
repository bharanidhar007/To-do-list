function ToDo({ todonames, tododates }) {
  return (
    <div className="container text-left">
      <div className="row">
        <div className="col-6">{todonames}</div>
        <div className="col-4">{tododates}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger buttons-width">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDo;

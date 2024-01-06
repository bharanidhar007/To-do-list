function ToDoCreate() {
  return (
    <div className="container text-left">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter to-do here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success buttons-widthName">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoCreate;

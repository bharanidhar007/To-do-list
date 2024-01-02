function ToDoCreate() {
  return (
    <div class="container text-left">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter to-do here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success buttons-width">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoCreate;

function ToDo2() {
  let todoname = "Go to collage";
  let tododate = "4/10/2023";

  return (
    <div class="container text-left">
      <div class="row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger buttons-width">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDo2;

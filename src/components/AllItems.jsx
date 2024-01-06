import ToDo from "./ToDo";

function AllItems({ doitems }) {
  return (
    <>
      {doitems.map((item) => {
        <ToDo todonames={item.nowname} tododates={item.nowdate}></ToDo>;
      })}
      <ToDo todonames={"Buy pen"} tododates={"5/12/2023"}></ToDo>
      <ToDo todonames={"Buy Milk"} tododates={"5/12/2023"}></ToDo>
      <ToDo todonames={"Go to collage"} tododates={"5/12/2023"}></ToDo>
    </>
  );
}
export default AllItems;

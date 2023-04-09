import "./style.scss";
import "./../Button/style.scss";

const ButtonSelect = ({ type, setType }) => {
  const options = [
    {
      name: "desc",
      title: "Product Description",
      id: "description",
    },
    {
      name: "info",
      title: "Additional info",
      id: "add-info",
    },
  ];

  const handleChange = (event) => {
    const { name } = event.target;
    switch (name) {
      case "desc":
        setType("desc");
        break;

      case "info":
        type = "info";
        setType("info");
        break;

      default:
        return;
    }
  };

  return (
    <>
      {options.map((item) => (
        <button
          className="button button--description"
          onClick={handleChange}
          name={item.name}
          id={item.id}
          key={item.id}
          type={type}
        >
          {item.title}
        </button>
      ))}
    </>
  );
};

export default ButtonSelect;

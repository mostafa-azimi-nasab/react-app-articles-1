import styled from "./articles.module.css";

function Articles(props) {
  return (
    <div className={styled.articles}>
      <img src={props.result.imageurl} alt="" />
      <h3>{props.result.title}</h3>
      <span>reading time :{props.result.reading}</span>
    </div>
  );
}
export default Articles;

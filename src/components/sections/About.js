import "../../styles/Body.css";
import me from '../../images/me.png'

export default function About() {
  return (
    <div className="main">
      <section className="firstsection" id="about">
        <div className="bio">
          <img
            src={me}
            alt="Sam Tomaka professional headshot."
          ></img>
          <div>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              sapiente architecto quisquam in, rem exercitationem fuga, fugiat
              error tenetur numquam ducimus quaerat. Fugiat atque iure id quasi
              consectetur ipsum labore quidem, aliquid, quam nulla magni
              voluptate voluptates placeat dolor nisi, assumenda adipisci
              obcaecati consequuntur ad cupiditate odio. Provident est corrupti
              dignissimos eveniet vero? Quisquam, in porro numquam inventore at
              dolore quo? Nisi sit, porro eveniet aperiam asperiores consequatur
              dolores fuga amet quod iure consequuntur atque. Ea saepe sunt enim
              perspiciatis ex reprehenderit voluptas blanditiis dolorum ipsum
              distinctio architecto, velit praesentium, deleniti at tenetur
              delectus similique vel sed sequi illo cumque.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWise.</h2>
          <p>
            WorldWise is a travel diary that helps you keep track of the places
            you have visited and the experiences you want to remember. Pin
            cities on the map, add notes and dates, and build a personal history
            of your journeys over time.
          </p>
          <p>
            Whether you are planning your next adventure or looking back at past
            trips, WorldWise gives you a clean, visual way to organize your
            travel memories and see your story unfold across the globe.
          </p>
        </div>
      </section>
    </main>
  );
}

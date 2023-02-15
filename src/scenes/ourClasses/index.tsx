import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";
import image5 from "@/assets/images/image5.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Whether you're a weight training expert or you are lifting a weight for the first time; Pulse classes are for you! We will guide you and you'll get stronger, one rep at a time.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "In our in-person classes, students receive comprehensive asana instruction within a creative, accessible flow, emphasizing the breath to find a balance between effort and ease.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Build strength, stability and endurance in the muscles that support your core, improve balance, assist injury prevention, and become better at everything you do. You will work with resistance tubes and weight plates, as well as bodyweight exercises like crunches, and hovers.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Join our four week outdoor fitness program that offers fitness instruction, nutritional counseling and motivational training packed with fun, energizing activities designed to help you achieve your fitness goals.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
    description:
    "We offer signature fitness classes including HIIT, Barre, Mat Pilates, Boxing and Martial Arts, Zumba, Treadmill Running, Pool workouts and more.",
  }
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2400px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

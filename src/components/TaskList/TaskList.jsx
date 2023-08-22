import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";
import { AnimatePresence, motion } from "framer-motion";

// prop drilling
function TaskList({ tasks, onDelete, onChange }) {
  return (
    <AnimatePresence>
      {tasks.length !== 0 && (
        <motion.ul
          className={styles.list}
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          exit={{
            scaleY: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              completed={task.completed}
              text={task.text}
              onDelete={onDelete}
              onChange={onChange}
            />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default TaskList;

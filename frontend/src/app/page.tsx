export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = () => {
    fetch("http://localhost:3001/tasks", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = () => {
    fetch("http://localhost:3001/task", {
      method: "PUT",
      body: JSON.stringify({ title, date: Date.now() }),
    })
      .then((res) => res.json())
      .then(() => {
        setTitle("");
        fetchTasks();
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task: any) => (
          <li key={task._id}>
            {task.title} - {task.completed ? "Done" : "Pending"}
            <div>Completed on:{task.completedOn}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

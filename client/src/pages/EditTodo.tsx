import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";
import { Form } from "../components/Form";
import type { Todo } from "../../global";

export const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [titleError, setTitleError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [timeError, setTimeError] = useState<boolean>(false);
  const [dateError, setDateError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:80/todo/api/${id}`)
      .then((response) => {
        const todo = response.data[0];
        setTodo(todo || null);
        setTitle(todo.title || "");
        setDescription(todo.description || "");
        setTime(todo.due_time || "");
        setDate(todo.due_date || "");
        setStatus(todo.status || "");
      })
      .catch((error) => {
        console.error("Error fetching todo:", error);
      });
  }, [id]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setTitleError(false);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    setDescriptionError(false);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    setTimeError(false);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setDateError(false);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setError("");
    e.preventDefault();
    try {
      const now = new Date();
      const currentDate = `${now.getFullYear()}-${
        now.getMonth() + 1
      }-${now.getDate()}`;
      const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      const editedTodo = {
        id: todo?.id,
        title,
        description,
        due_date: date,
        due_time: time,
        status,
        updated_at: `${currentDate} ${currentTime}`,
      };
      console.log(editedTodo, todo);
      const response = await axios.put(
        `http://localhost:80/todo/api/${id}/edit`,
        editedTodo
      );
      console.log(response.data);
      resetFields();
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error(error);
      setError("An error occurred");
    }
  };

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setTime("");
    setDate("");
    setStatus("");
  };

  return (
    <PageContainer>
      <PageTitle>Edit {todo ? todo.title : ""}</PageTitle>
      {todo && (
        <Form
          title={title}
          description={description}
          time={time}
          date={date}
          status={status}
          titleError={titleError}
          descriptionError={descriptionError}
          timeError={timeError}
          dateError={dateError}
          error={error}
          success={success}
          handleTitleChange={handleTitleChange}
          handleDescriptionChange={handleDescriptionChange}
          handleTimeChange={handleTimeChange}
          handleDateChange={handleDateChange}
          handleStatusChange={handleStatusChange}
          handleSubmit={handleSubmit}
        />
      )}
    </PageContainer>
  );
};

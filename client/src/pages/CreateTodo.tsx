import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { PageContainer } from "../components/PageContainer";
import { Form } from "../components/Form";

export const CreateTodo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");

  const [error, setError] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);

  const [success, setSuccess] = useState(false);

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    setError("");
    e.preventDefault();
    try {
      const now = new Date();
      const currentDate = `${now.getFullYear()}-${
        now.getMonth() + 1
      }-${now.getDate()}`;
      const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      if (!title) {
        setError("Title is required");
        setTitleError(true);
        return;
      }
      if (!description) {
        setError("Description is required");
        setDescriptionError(true);
        return;
      }
      if (!date) {
        setError("Date is required");
        setDateError(true);
        return;
      }
      if (!time) {
        setError("Time is required");
        setTimeError(true);
        return;
      }
      if (new Date(`${date}T${time}`) < now) {
        setError("Date and time must be in the future");
        return;
      }
      const newTodo = {
        title,
        description,
        due_date: date,
        due_time: time,
        currentDate,
        currentTime,
      };
      const response = axios.post(
        "http://localhost:80/todo/api/index.php",
        newTodo
      );
      console.log(response);
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

  return (
    <PageContainer>
      <PageTitle>Create Todo</PageTitle>
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
    </PageContainer>
  );
};

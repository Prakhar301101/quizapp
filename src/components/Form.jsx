import { useGlobalContext } from "./context";
import React from "react";

//will show the setupform of quiz


const Form = () => {
  const {quiz,handleChange,handleSubmit,error} = useGlobalContext()

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="Container  bg-slate-400 rounded-lg w-5/6 max-h-[60vh]  overflow-auto shadow-lg max-w-2xl ">
        <form>
          <h1 className="text-3xl font-mono font-bold text-center p-3 m-0">
            Quiz Setup
          </h1>
          <div className="flex flex-col justify-between p-4 h-[35vh]">
            <label className="font-semibold font-mono text-xl" htmlFor="amount">
              Number of Question:
            </label>
            <input
              className="rounded-sm p-1 mb-2 "
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
              placeholder="Enter number between 1 and 50"
            />

            <label
              className="font-semibold font-mono text-xl"
              htmlFor="category"
            >
              Select Category:
            </label>
            <select
              className="rounded-sm p-1 mb-2  "
              name="category"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science &amp; Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">
                Entertainment: Japanese Anime &amp; Manga
              </option>
              <option value="32">
                Entertainment: Cartoon &amp; Animations
              </option>
            </select>

            <label
              className="font-semibold font-mono text-xl"
              htmlFor="difficulty"
            >
              Select Difficulty:{" "}
            </label>
            <select
              className="rounded-sm p-1"
              name="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          {error && (
            <p className="error font-semibold text text-center mb-2">
              can't generate questions, please try different options!!
            </p>
          )}
          <button
            className="w-full block text-white p-3 bg-slate-800 hover:bg-slate-700"
            type="Submit"
            onClick={handleSubmit}
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

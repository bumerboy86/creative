import {ChangeEvent, FormEvent, useState} from "react";

const initialState = {
    username: "",
    email: "",
    message: "",
}

const Contacts = () => {
    const [ formInputs, setFormInputs ] = useState(initialState);

    const inputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormInputs((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormInputs(initialState);
    }

    return (
        <div className="flex flex-col justify-center items-center box-border pt-20">
            <h1 className="text-white text-2xl mb-4">Форма обратной связи:</h1>
            <form onSubmit={submitHandler} className="flex flex-col items-center">
                <input
                    className="w-64 py-2 px-4 mb-2 rounded-md placeholder-gray-500 bg-[#98ec65] bg-opacity-70 focus:outline-none"
                    type="text"
                    name={"username"}
                    placeholder="Ваше имя"
                    value={formInputs.username}
                    onChange={inputHandler}
                />
                <input
                    className="w-64 py-2 px-4 mb-4 rounded-md placeholder-gray-500 bg-[#98ec65] bg-opacity-70 focus:outline-none"
                    type="email"
                    name={"email"}
                    placeholder="Ваш email"
                    value={formInputs.email}
                    onChange={inputHandler}
                />
                <textarea
                    className="w-64 py-2 px-4 mb-4 rounded-md placeholder-gray-500 bg-[#98ec65] bg-opacity-70 focus:outline-none"
                    rows={4}
                    name={"message"}
                    placeholder="Ваше сообщение"
                    value={formInputs.message}
                    onChange={inputHandler}
                ></textarea>
                <button
                    disabled={!formInputs.username.trim() && !formInputs.email.trim() && !formInputs.message.trim()}
                    className={`w-[10rem] py-[6px] rounded-3xl mt-[1rem] ${formInputs.username.trim() && formInputs.email.trim() && formInputs.message.trim() ? 'bg-[#98ec65] hover:bg-[#81e047]' : 'bg-[#dddcdc] cursor-not-allowed'}`}
                    type="submit"
                >
                    Отправить
                </button>
            </form>
        </div>
    )
}
export default Contacts;
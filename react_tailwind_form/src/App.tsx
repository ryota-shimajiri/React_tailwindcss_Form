import { useState } from "react";

export const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const onChangeLastName = (e: any) => {
    setLastName(e.target.value);
  };

  const onChangeFirstName = (e: any) => {
    setFirstName(e.target.value);
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangeTel = (e: any) => {
    setTel(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (lastName !== "" && firstName !== "" && email !== "" && tel !== "") {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="mt-40 mx-20">
      <div className="flex justify-center mt-32 mx-10 mb-10">
        <form className="w-full max-w-2xl" onSubmit={onSubmit}>
          <p className="text-2xl text-black-500 font-bold text-center mb-5">
            お申し込みフォーム
          </p>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-last-name"
              >
                姓
                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text>
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
                placeholder="姓"
                onChange={onChangeLastName}
              ></input>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-first-name"
              >
                名
                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text>
              </label>
            </div>

            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
                placeholder="名"
                onChange={onChangeFirstName}
              ></input>
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                メールアドレス
                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text>
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="email"
                value={email}
                defaultValue=""
                placeholder="例) example@gmail.me"
                onChange={onChangeEmail}
              ></input>
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                電話番号
                <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                  必須
                </text>
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                defaultValue=""
                placeholder="例) 03-1234-5678"
                onChange={onChangeTel}
              ></input>
            </div>
          </div>
          <div className="flex justify-center">
            {isSubmitted ? (
              <div>
                <p className="text-green-500 text-lg text-bold">
                  お問合せを送信いたしました。
                </p>
              </div>
            ) : (
              <button
                className={
                  "py-3 lg:py-3 px-14 lg:px-14 text-white-500 font-bold rounded-3xl bg-blue-400 hover:shadow-teal-md transition-all outline-none text-white"
                }
                type="submit"
              >
                送信
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

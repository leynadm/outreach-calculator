import { useState } from "react";
import "./App.css";
import { lemlistObj } from "./utils/platforms";
import CostsResults from "./components/CostsResults";
import calculateCosts from "./functions/calculateCosts";
function App() {
  const [emailsPerDay, setEmailsPerDay] = useState("90");
  const [leadsConversionRate, setLeadsConversionRate] = useState("1");
  const [successfulScrapeRate, setSuccessfulScrapeRate] = useState("65");
  const [emailVerificationRate, setEmailVerificationRate] = useState("75");
  const [linkedInAltAcc, setLinkedInAltAcc] = useState(false);
  const [showCosts, setShowCosts] = useState(false);
  const [conversionRate, setConversionRate] = useState(0.1);
  const [numberOfLeads, setNumberOfLeads] = useState("2");
  const [timeInterval, setTimeInterval] = useState("week");
  const [advCalculatorToggle, setAdvCalculatorToggle] = useState(false);
  console.log({ lemlistObj });

  function handleCalculateCosts() {
    setShowCosts(true);
    calculateCosts();
  }
  console.log(timeInterval);
  return (
    <div>
      <h1 className="text-sky-500/100">Outreach Calculator</h1>
      <div className="flex-col space-y-2">
        <div className="flex justify-center align-middle items-center">
          <p className="">I want</p>
          <div className="p-2">
            <input
              className="shadow appearance-none border rounded w-16 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="emails-target-numbers"
              type="text"
              placeholder=""
              required
              value={numberOfLeads}
              onChange={(e) => setNumberOfLeads(e.target.value)}
            />
          </div>
          <p>qualified {numberOfLeads === "1" ? "lead" : "leads"} per</p>
        </div>

        <div className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            htmlFor="day"
          >
            <input
              name="timeInterval"
              type="radio"
              value="day"
              checked={timeInterval === "day"}
              onChange={(e) => setTimeInterval(e.target.value)}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:bg-sky-600 transition-all"
              id="day"
            />
            <span className="absolute bg-sky-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
          </label>
          <label className=" cursor-pointer text-sm" htmlFor="day">
            day
          </label>
        </div>

        <div className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            htmlFor="week"
          >
            <input
              name="timeInterval"
              type="radio"
              value="week"
              checked={timeInterval === "week"}
              onChange={(e) => setTimeInterval(e.target.value)}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:bg-sky-600 transition-all"
              id="week"
            />
            <span className="absolute bg-sky-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
          </label>
          <label className=" cursor-pointer text-sm" htmlFor="week">
            week
          </label>
        </div>

        <div className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            htmlFor="month"
          >
            <input
              name="timeInterval"
              type="radio"
              value="month"
              checked={timeInterval === "month"}
              onChange={(e) => setTimeInterval(e.target.value)}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:bg-sky-600 transition-all"
              id="month"
            />
            <span className="absolute bg-sky-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
          </label>
          <label className=" cursor-pointer text-sm" htmlFor="month">
            month
          </label>
        </div>

        <div className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            htmlFor="year"
          >
            <input
              name="timeInterval"
              type="radio"
              value="year"
              checked={timeInterval === "year"}
              onChange={(e) => setTimeInterval(e.target.value)}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:bg-sky-600 transition-all"
              id="year"
            />
            <span className="absolute bg-sky-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
          </label>
          <label className=" cursor-pointer text-sm" htmlFor="year">
            year
          </label>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <p>at a lead conversation rate of</p>

          <input
            className="shadow appearance-none border rounded w-16 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="emails-target-numbers"
            type="text"
            placeholder=""
            value={leadsConversionRate}
            onChange={(e) => setLeadsConversionRate(e.target.value)}
          />
          <p>%.</p>
        </div>

        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            checked={advCalculatorToggle}
            onChange={(e) => setAdvCalculatorToggle(e.target.checked)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Advanced Simulation
          </span>
        </label>

        {advCalculatorToggle && (
          <div>
            <div className="p-2">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="emails-target-numbers"
              >
                Number of contacts to scrape per day
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="emails-target-numbers"
                type="text"
                placeholder=""
                value={emailsPerDay}
                onChange={(e) => setEmailsPerDay(e.target.value)}
              />
            </div>

            <div className="p-2">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="emails-target-numbers"
              >
                Successful scrape rate ({successfulScrapeRate}%)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="emails-target-numbers"
                type="text"
                placeholder=""
                value={successfulScrapeRate}
                onChange={(e) => setSuccessfulScrapeRate(e.target.value)}
              />
            </div>

            <div className="p-2">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="emails-target-numbers"
              >
                Email Verification Rate ({emailVerificationRate}%)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="emails-target-numbers"
                type="text"
                placeholder=""
                value={emailVerificationRate}
                onChange={(e) => setEmailVerificationRate(e.target.value)}
              />
            </div>

            <div className="p-2">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="emails-target-numbers"
              >
                Leads Conversion rate ({leadsConversionRate}%)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="emails-target-numbers"
                type="text"
                placeholder=""
                value={leadsConversionRate}
                onChange={(e) => setLeadsConversionRate(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
          <input
            className="relative float-left -ms-[0.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
            type="checkbox"
            checked={linkedInAltAcc}
            onChange={(e) => setLinkedInAltAcc(e.target.checked)}
            id="checkboxDefault"
          />
          <label
            className="inline-block ps-[0.15rem] hover:cursor-pointer"
            htmlFor="checkboxDefault"
          >
            LinkedIn Alternative Accounts
          </label>
        </div>
        <button
          className="rounded-md bg-blue-800  py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-900 focus:shadow-none active:bg-slate-700 hover:bg-slate-900 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
          onClick={handleCalculateCosts}
        >
          Calculate
        </button>

        {showCosts && <CostsResults />}
      </div>
    </div>
  );
}

export default App;

import React from "react";

const FlexboxComponent = () => {
  return (
    <div className="flex">
      <div className="flex-grow w-1/2  bg-lightblue">
        <div className="border-b-2 border-dotted px-4 pb-6 border-sky-500 my-4">
          <h1 className="font-bold text-2xl ">Eligibility For Treatment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            mollitia consequatur beatae. Esse tempore voluptatem ex quas
            provident eum mollitia <br /> laudantium a possimus quibusdam! Sint
            nostrum eum ullam repellendus ipsam!
          </p>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
        </div>
        <div className="border-b-2 border-dotted px-4 pb-6 border-sky-500 my-4">
          <h1 className="font-bold text-2xl">Preparation Before Treatment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            mollitia consequatur beatae. Esse tempore voluptatem ex quas
            provident eum mollitia <br /> laudantium a possimus quibusdam! Sint
            nostrum eum ullam repellendus ipsam!
          </p>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
        </div>
        <div className="border-b-2 border-dotted px-4 pb-6 border-sky-500 my-4">
          <h1 className="font-bold text-2xl">About Treatment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            mollitia consequatur beatae. Esse tempore voluptatem ex quas
            provident eum mollitia <br /> laudantium a possimus quibusdam! Sint
            nostrum eum ullam repellendus ipsam!
          </p>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
        </div>
        <div className="border-b-2 border-dotted px-4 pb-6 border-sky-500 my-4">
          <h1 className="font-bold text-2xl">Post-Treatment Care</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            mollitia consequatur beatae. Esse tempore voluptatem ex quas
            provident eum mollitia <br /> laudantium a possimus quibusdam! Sint
            nostrum eum ullam repellendus ipsam!
          </p>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
        </div>
        <div className="border-b-2 border-dotted px-4 pb-6 border-sky-500 my-4">
          <h1 className="font-bold text-2xl">Treatment Recovery Tips.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            mollitia consequatur beatae. Esse tempore voluptatem ex quas
            provident eum mollitia <br /> laudantium a possimus quibusdam! Sint
            nostrum eum ullam repellendus ipsam!
          </p>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing </li>
        </div>
        <div className="border-b-2 border-dotted px-4 pb-6 border-sky-500 my-4">
          <h1 className="font-bold text-2xl">Treatment FAQs</h1>
          <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div class="flex flex-col items-center">
              <h2 class="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
              <p class="text-neutral-500 text-xl mt-3">
                Frequenty asked questions
              </p>
            </div>
            <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
              <div class="py-5">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> What is a SAAS platform?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    SAAS platform is a cloud-based software service that allows
                    users to access and use a variety of tools and
                    functionality.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> How does billing work?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    We offers a variety of billing options, including monthly
                    and annual subscription plans, as well as pay-as-you-go
                    pricing for certain services. Payment is typically made
                    through a credit card or other secure online payment method.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Can I get a refund for my subscription?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    We offers a 30-day money-back guarantee for most of its
                    subscription plans. If you are not satisfied with your
                    subscription within the first 30 days, you can request a
                    full refund. Refunds for subscriptions that have been active
                    for longer than 30 days may be considered on a case-by-case
                    basis.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> How do I cancel my subscription?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    To cancel your We subscription, you can log in to your
                    account and navigate to the subscription management page.
                    From there, you should be able to cancel your subscription
                    and stop future billing.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Can I try this platform for free?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    We offers a free trial of its platform for a limited time.
                    During the trial period, you will have access to a limited
                    set of features and functionality, but you will not be
                    charged.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> How do I access documentation?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Documentation is available on the company's website and can
                    be accessed by logging in to your account. The documentation
                    provides detailed information on how to use the , as well as
                    code examples and other resources.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> How do I contact support?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    If you need help with the platform or have any other
                    questions, you can contact the company's support team by
                    submitting a support request through the website or by
                    emailing support@We.com.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Do you offer any discounts or promotions?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    We may offer discounts or promotions from time to time. To
                    stay up-to-date on the latest deals and special offers, you
                    can sign up for the company's newsletter or follow it on
                    social media.
                  </p>
                </details>
              </div>
              <div class="py-5">
                <details class="group">
                  <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> How do we compare to other similar services?</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    This platform is a highly reliable and feature-rich service
                    that offers a wide range of tools and functionality. It is
                    competitively priced and offers a variety of billing options
                    to suit different needs and budgets.
                  </p>
                </details>
              </div>
            </div>
          </div>
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/docs/images/carousel/carousel-1.svg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/docs/images/carousel/carousel-2.svg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/docs/images/carousel/carousel-3.svg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/docs/images/carousel/carousel-4.svg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/docs/images/carousel/carousel-5.svg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                className="bg-blue-200 w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="bg-blue-200 w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="bg-blue-200 w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                className="bg-blue-200 w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                className="bg-blue-200 w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 bg-lightgreen w-1/2 ml-4">
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              name="password"
              placeholder="********"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="********"
            />
          </div>
          <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlexboxComponent;

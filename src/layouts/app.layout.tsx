import React from 'react';
import SpendingForm from './spending-form-modal';

const AppLayout = ({ children }: React.PropsWithChildren<any>) => {

    return (
        <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
            <aside className="sm:h-full sm:w-16 w-full h-12 bg-gray-800 text-gray-200">
                <ul className="text-center flex flex-row sm:flex-col w-full">
                    <li className="h-14 border-b border-gray-900 hidden sm:block">
                        <a id="page-icon" href="/" className="h-full w-full hover:bg-gray-700 block p-3">
                            <img
                              className="object-contain h-full w-full"
                              src="https://avatars1.githubusercontent.com/u/6157842?v=4"
                              alt="open-source"
                            />
                        </a>
                    </li>
                    <li className="sm:border-b border-gray-900 flex-1 sm:w-full" title="Inbox">
                        <a id="page-icon" href="/" className="text-gray-400 hover:text-white h-full w-full hover:bg-gray-700 block p-3">
                            <i className="mdi mdi-format-list-text"> </i>
                        </a>
                    </li>
                    <li className="sm:border-b border-gray-900 flex-1 sm:w-full" title="Settings">
                        <a id="page-icon" href="/" className="text-gray-400 hover:text-white h-full w-full hover:bg-gray-700 block p-3">
                            <i className="mdi mdi-chart-arc"> </i>
                        </a>
                    </li>
                    <li className="sm:border-b border-gray-900 flex-1 sm:w-full" title="Users">
                        <a id="page-icon" href="/" className="text-gray-400 hover:text-white h-full w-full hover:bg-gray-700 block p-3">
                            <i className="mdi mdi-account-cog"> </i>
                        </a>
                    </li>
                </ul>
            </aside>
            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
                <nav className="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14">
                    <h1 className="font-semibold text-lg">Money!</h1>
                    <span className="flex-1"/>
                    <span className="mr-2">
                        <input type="text" placeholder="Search"/>
                    </span>
                    <button
                      className="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                        <i className="fas fa-user text-gray-400 hover:text-white"/>
                    </button>
                </nav>
                <section className="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
                    <div className="flex flex-col h-full w-full">

                        { children }

                        <SpendingForm>
                            { open => (
                                <button
                                  onClick={ _ => open() }
                                  className="p-0 w-14 h-14 flex items-center justify-center active:outline-none active:select-none bg-purple-600 rounded-full hover:bg-purple-700 active:shadow-lg absolute left-1/2 transform -translate-x-1/2 bottom-14 shadow-xl"
                                >
                                    <i className="mdi mdi-plus text-5xl"/>
                                </button>
                            ) }
                        </SpendingForm>
                    </div>
                </section>
            </main>
        </section>
    );
};

export default AppLayout;


import React from "react";
function Card() {
    return (

        <div className="container mx-auto py-8 bg-slate-700">
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4 pl-[500px] text-gray-100">Three Cards Section</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="mt-12 pl-[100px]">
                        <img src="card-1.jfif" alt="card-1" />
                    </div>

                    <div className="mt-12 pl-[90px]">
                        <img src="card-2.jfif" alt="card-2" />
                    </div>

                    <div className="mt-12 pl-[90px]">
                        <img src="card-3.jfif" alt="card-3" />
                    </div>

                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-4 mt-[150px] pl-[500px] text-gray-100">Two Cards Section</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="pl-[300px] mt-14">
                        <img src="card-5.jfif" alt="card-1" />
                    </div>

                    <div className="mt-14 pl-[90px]">
                        <img src="card-6.jfif" alt="card-2" />
                    </div>
                </div>
            </section>

        </div>




    );

};

export default Card
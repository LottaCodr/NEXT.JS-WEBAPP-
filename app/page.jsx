import Image from "next/image";
import Link from "next/link";
import Icon from "./components/EMAIL.png";
import Lotta from "./components/lotta.jpg";
import pic2 from "./components/lotta2.jpg";

export default function Home() {
  return (
    <main>
      <div className="text-center ">
        <h6 className=" text-5xl ">
          <b>
            Think of us as your <br />
            <span className=" text-purple-800">growth partner</span>
          </b>
        </h6>
        <br />
        <small>
          Through the power of co-ownership you no longer have to <br /> want to
          gather a small fortune in order to invest in real estate
        </small>
        <br />
        <br />
        <br />
        <div className=" bg-purple-600"></div>
      </div>

      {/* the picture is here */}
      <div className=" flex  h-96 justify-center w-auto space-x-6">
        <Image
          className="w-full h-full rounded-3xl   object-cover object-top "
          src={Lotta}
          alt="Image"
        />
        <Image
          className=" w-1/2 h-full rounded-3xl  object-cover"
          src={Lotta}
          alt="Image"
        />
      </div>
      <br />

      {/* Here is the ratings section */}

      <section className=" flex bg-gray-200  justify-between space-x-2 p-7   w-auto ">
        <div className="justify-center">
          <h2 className=" text-4xl text-center ">
            100 <span className=" text-purple-400">M</span>
          </h2>
          <small>Client Satisfaction</small>
        </div>
        <div className="justify-center">
          <h2 className="text-4xl text-center ">
            24 <span className=" text-purple-400">h</span>
          </h2>
          <small>Expert Support Team</small>
        </div>
        <div className="justify-center">
          <h2 className="text-4xl text-center">
            9 <span className=" text-purple-400">k+</span>
          </h2>
          <small>Properties</small>
        </div>
        <div className="justify-center">
          <h2 className="text-4xl text-center ">
            208 <span className=" text-purple-400">k+</span>
          </h2>
          <small>Co-Owners Worldwide</small>
        </div>
      </section>
      <br />
      <br />
      <br />

      {/* another picture/text layout */}

      <div className=" flex  h-96 justify-center w-auto space-x-11 ">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            className="w-full h-full rounded-lg   object-cover  "
            src={Lotta}
            alt="Image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={Lotta}
              className=" w-1/2 h-1/2 object-cover absolute bottom-3 right-3 rounded-lg shadow-lg transform translate-y-8 translate-x-8"
            />
          </div>
        </div>

        <div className=" w-full text-left ">
          <h1 className="text-left">
            <b>About Cuddle Realty</b>
          </h1>
          <p>
            We are not just a platform; we are a movement, empowering everyday
            investors to seize the reins of their financial destiny. With our
            cutting-edge web app, we break the barriers that once confined real
            estate investing to the elite, offering you access to a curated
            selection of premium properties and projects. Transparent due
            diligence, expert curation, and integrated property management are
            the cornerstones of our revolution. Step into a world where passive
            income is within reach, where thriving is no longer a
            privilege but a reality.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className=" flex  h-96 justify-center w-auto space-x-11 ">
        <div className=" w-full text-left ">
          <h1 className="text-left">
            <b>Our Mission</b>
          </h1>
          <p>
            At Cuddle Realty, our mission is to revolutionize the world of real
            estate investment by making coownership accessible, intuitive, and
            rewarding for everyone. We strive to democratize property ownership,
            providing a platform where individuals can unite, invest, and
            prosper together. Our unwavering commitment is to empower a global
            community of investors to secure a better future, one coowned
            property at a time. We believe in transparency, innovation, and the
            power of collective ownership to transform lives and build lasting
            financial security.
          </p>
        </div>
        <Image
          className="w-full h-full rounded-3xl   object-cover object-top "
          src={Lotta}
          alt="Image"
        />
      </div>
      <br />

      <br />
      <h1 className=" text-2xl text-black">
        The story and values behind <br />
        our company
      </h1>
      <div className=" flex w-auto m-6 mt- justify-start ">
        <div className="services-container">
          <div className="icon-container ">
            <Image
              className=" flex justify-center py-2 "
              src={Icon}
              alt="Picture of Lotta"
              width={70}
            />{" "}
          </div>

          <div className="m-6">
            <h1 className="text-left">
              <small> Transparency</small>
            </h1>
            <p>
              We are committed to open, clear, and honest communication.
              Transparency forms the foundation of trust and integrity within
              our community of coowners and investors.
            </p>
          </div>
        </div>
        <div className="services-container">
          <div className="icon-container ">
            <Image
              className=" flex justify-center py-2 "
              src={Icon}
              alt="Picture of Lotta"
              width={70}
            />
          </div>

          <div className="m-6">
            <h1 className="text-left">
              <small> Community</small>
            </h1>
            <p>
              We foster a sense of community among our co owners, encouraging
              collaboration, knowledge sharing, and support. We believe that
              collectively, we can achieve more and create a positive impact. 
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className=" text-center justify-center ">
        <div className="bg-purple-400  rounded-full  text-center w-40 h-20  mx-auto justify-center">
          <h1 className="text-black text-center p-6 "> Our Values</h1>
        </div>
        <br />
        <h1 className=" text-2xl text-black">
          Meet Our Team <br />
          <span className="text-purple">Members</span>
        </h1>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          <br />
          lectus quis ipsum fringilla pulvinar.
        </small>
        <br />
      </div>
      <br />
      <br />
      <div className="flex space-x-4  justify-around w-full">
        <div className="">
          <Image
            className=" w-44 h-48 flex justify-center object-top  rounded-lg "
            src={Lotta}
            alt="Picture of Lotta"
          />
          <br />
          <div>
            <p className="">
              <b>Adewale Da-Silva</b>
            </p>
            <small>Cofounder/CEO</small>
            <section className="flex space-x-2">
              <div className="bg-black w-4 h-4 rounded-full"></div>
              <div className="bg-black w-4 h-4 rounded-full"></div>
              <div className="bg-black w-4 h-4 rounded-full"></div>
              <div className="bg-black w-4 h-4 rounded-full"></div>
            </section>
          </div>
        </div>
        <div className="">
          <Image
            className=" w-44 h-48 flex justify-center object-top  rounded-lg "
            src={Lotta}
            alt="Picture of Lotta"
          />
          <br />
          <div>
            <p>
              <b>Adewale Da-Silva</b>
            </p>
            <small>Cofounder/CEO</small>
            <section className="flex space-x-2">
              <div className="bg-black w-4 h-4 rounded-full"></div>
              <div className="bg-black w-4 h-4 rounded-full"></div>
              <div className="bg-black w-4 h-4 rounded-full"></div>
              <div className="bg-black w-4 h-4 rounded-full"></div>
            </section>
          </div>
        </div>
        <div className="">
          <Image
            className=" w-44 h-48 flex justify-center object-top  rounded-lg "
            src={Lotta}
            alt="Picture of Lotta"
          />
          <br />
          <div>
            <p>
              <b>Adewale Da-Silva</b>
            </p>
            <small>Cofounder/CEO</small>
            <section className="flex space-x-2">
              <div className="bg-black w-4 h-4 rounded-full"></div>
              <div className="bg-black w-4 h-4 rounded-full"></div>
              <div className="bg-black w-4 h-4 rounded-full"></div>
              <div className="bg-black w-4 h-4 rounded-full"></div>
            </section>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* Meet our Advisory */}

      <div className="text-center">
        <h1 className=" text-3xl text-black">
          Meet Our Advisory <br />
          <span className=" text-purple-700 ">Board Members</span>
        </h1>{" "}
        <br />
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          <br />
          lectus quis ipsum fringilla pulvinar.
        </small>
      </div>
      <br />

      <div>
        <div className=" w-full h-96 bg-purple-900"></div>
        <div className=" bg-red-900 w-60 h-60 object-cover absolute top-6 bottom-45 right-90 rounded-lg shadow-lg transform translate-y-2 translate-x-2"></div>
      </div>

      <h2>Dashboard</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
        repellendus tempore, exercitationem odit, quasi doloremque possimus
        recusandae alias sequi totam soluta natus iure eius, obcaecati sint
        dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed
        voluptates iste cum totam, facere explicabo, fugit suscipit ratione
        aspernatur consequuntur ex mollitia quaerat?
      </p>
      <div className="flex justify-center my-8">
        <Link href="/Tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
      <h2>Company Updates</h2>
      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
          quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
          pariatur molestiae, modi beatae corrupti.
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
          quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
          pariatur molestiae, modi beatae corrupti, assumenda distinctio
          adipisci, cupiditate minima eum vitae? Similique dicta est facilis
          debitis, autem temporibus quo repellat illum unde id iste veritatis
          eveniet, aspernatur enim quas.
        </p>
      </div>
    </main>
  );
}

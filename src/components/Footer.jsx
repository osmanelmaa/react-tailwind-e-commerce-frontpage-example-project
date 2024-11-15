const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 font-GeneralFont">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-400">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, explicabo voluptate. Recusandae deserunt aspernatur numquam asperiores sed dignissimos commodi molestiae similique.
            </p>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <ul className="text-gray-400">
              <li>About Company</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <ul className="text-gray-400">
              <li>Telefon: +90 123 456 7890</li>
              <li>Email: info@example.com</li>
              <li>Adres: İstanbul, Türkiye</li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <iframe
              title="Harita"
              className="w-full h-32 border-none rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798897787!2d-74.25987568721928!3d40.69767006362417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlNDEnNTMuNiJOIDc0wrAxNycwNi4yIlc!5e0!3m2!1str!2str!4v1630666523707!5m2!1str!2str"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500">
        © 2024 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

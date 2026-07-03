export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 text-center px-4">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
        Mari Berkolaborasi!
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
        Tertarik untuk diskusi soal web development, project bareng, atau sekadar nyapa? Jangan ragu buat kontak aku, ya!
      </p>
      
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <a 
          href="mailto:emailkamu@gmail.com" 
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Kirim Email
        </a>
        <a 
          href="https://github.com/username-github" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/username-linkedin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
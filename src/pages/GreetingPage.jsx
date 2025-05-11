const GreetingPage = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      // Navigasi ke halaman utama setelah 3 detik
      const timer = setTimeout(() => {
        navigate("/home");
      }, 3000);
  
      return () => clearTimeout(timer);
    }, [navigate]);
  
    return (
      <div>
        <h1>Welcome to My Portfolio!</h1>
        <p>Enjoy exploring my work</p>
      </div>
    );
  };
  
  export default GreetingPage;
  
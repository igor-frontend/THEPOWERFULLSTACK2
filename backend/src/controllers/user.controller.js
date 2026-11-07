const register = async (req, res) => {
    try {
        const { username, email, password } = req.body; 
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "El email ya está registrado" });

        const newUser = await User.create({ 
            username, 
            email, 
            password, 
            role: "user" 
        });
        
        const userResponse = newUser.toObject();
        delete userResponse.password;

        res.status(201).json(userResponse);
    } catch (error) {
        res.status(500).json({ message: "Error en el registro", error: error.message });
    }
};
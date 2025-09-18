import { signupUser, loginUser } from "../usecases/authUseCase.js";

export const signup = async (req, res) => {
  try {
    const result = await signupUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const result = await loginUser(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

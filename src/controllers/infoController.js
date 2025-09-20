export const getInfo = (req, res) => {
  const { _id, username, email, role } = req.user;

  res.status(200).json({
    status: "success",
    message: "User info retrieved successfully",
    data: {
      user: {
        id: _id,
        username,
        email,
        role,
      },
    },
  });
};

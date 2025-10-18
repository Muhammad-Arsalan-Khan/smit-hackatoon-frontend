import  { useState,} from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Snackbar,
  Alert,
  Link
} from "@mui/material"
import axios from "axios";
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import signupSchema from "../validation/signupSchema"
import OtpModal from "../model/otp"
import config from "../config.js"



const SignupForm = () => {
  const [showModal, setShowModal] = useState(false)
  const [userId, setUserId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      cnic: "",
      address: "",
      city: "",
      country: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${config.baseURL}/signup`,
        data
      )

      const userId = response.data.data
      const useremail = response.data.email
      localStorage.setItem("user_email", useremail)
      setUserId(userId)
      setSnackbar({
        open: true,
        message: "Signup successful! Please verify OTP",
        severity: "success",
      })
      setShowModal(true)
      reset()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      const errorMessage =
        err.response?.data?.message || "Signup failed. Please try again"
      setSnackbar({ open: true, message: errorMessage, severity: "error" })
    }
  };

  return (
     <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 4 },
        maxWidth: { xs: "90%", sm: 450 },
        mx: "auto",
        mt: { xs: 3, sm: 5 },
      }}
      >
      <Typography variant="h5" color="#4CAF50" gutterBottom>
        Sign Up
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {[
          { name: "name", label: "Name" },
          { name: "email", label: "Email" },
          { name: "password", label: "Password", type: "password" }
        ].map((field) => (
          <Box key={field.name} mb={2}>
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <TextField
                  fullWidth
                  label={field.label}
                  type={field.type || "text"}
                  {...controllerField}
                  error={!!errors[field.name]}
                  helperText={errors[field.name]?.message}
                />
              )}
            />
          </Box>
        ))}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, bgcolor: "#4CAF50", color: "white", "&:hover": { backgroundColor: "#4ccd51ff" }, }}
          disabled={loading}
        >
          Sign Up
        </Button>
         <Box sx={{ marginTop: 2 }}>
            <Typography variant="body2" color="textSecondary" align="center">
              I have Already Account{" "}
              <Link href="/login" underline="hover" color="#4CAF50">
                Login
              </Link>
            </Typography>
          </Box>
      </Box>

      {showModal && (
        <OtpModal onClose={() => setShowModal(false)} userId={userId} page={"signup"} />
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  )
}

export default SignupForm


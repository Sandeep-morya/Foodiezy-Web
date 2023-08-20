﻿import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { REGISTER_USER } from "../utils/resolvers";
import { useAppDispatch } from "./reduxHooks";
import axios from "axios";
import { initiateUser } from "../redux/userSlice";
import { TokenResponse } from "@react-oauth/google";
import { initiateCart } from "../redux/cartSlice";

const useGoogleLoginSuccess = () => {
	const [registerUser, { loading, error }] = useMutation(REGISTER_USER);
	const dispatch = useAppDispatch();
	const onSuccess = useCallback(
		async (tokenResponse: TokenResponse) => {
			const { data } = await axios.get(
				"https://www.googleapis.com/oauth2/v2/userinfo",
				{ headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
			);
			try {
				const variables = {
					name: data.name,
					email: data.email,
					image: data.picture,
					password: "",
					provider: "Google",
				};

				const res = await registerUser({ variables });
				const token = res.data.registerUser.token;
				const { _id, name, email, image, provider, cart } =
					res.data.registerUser.about;
				const about = { _id, name, email, image, provider };
				dispatch(initiateUser({ token, about }));
				dispatch(initiateCart(cart));
			} catch (error) {
				console.log(error);
			}
		},
		[dispatch, registerUser],
	);
	return { loading, error, onSuccess };
};

export default useGoogleLoginSuccess;

import { useRef, useState } from "react";
import { Button, Input } from "@rneui/themed";
import { Text, View, StyleSheet } from "react-native";

type LoginProps = {
	children: JSX.Element
}

const Login = ({ children }: LoginProps) => {

	const [ isLoggedIn, setIsLoggedIn ] = useState(false);
	const [ hasError, setHasError ] = useState(false);
	const usernameRef = useRef(null);
	const passwordRef = useRef(null);

	return (
		<View style={styles.container}>
			{isLoggedIn ? children :
				<>
					<Text style={styles.text}>Login</Text>

					<Input
						placeholder='Please enter your username or email'
						containerStyle={{ width: 300 }}
					/>

					<Input
						placeholder='Please enter your password'
						errorStyle={{ color: 'red' }}
						errorMessage={hasError ? 'Username or password is incorrect' : ''}
						secureTextEntry={true}
						containerStyle={{ width: 300 }}
						inputContainerStyle={{ borderColor: hasError ? 'red' : 'grey' }}
					/>

					<Button
						title="Log in"
						loading={false}
						loadingProps={{ size: 'small', color: 'white' }}
						buttonStyle={{
							backgroundColor: 'rgba(111, 202, 186, 1)',
							borderRadius: 5,
						}}
						titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
						containerStyle={{
							height: 50,
							width: 200,
							marginVertical: 10,
						}}
						onPress={() => setHasError(true)}
					/>
					<Text style={styles.text}>Don't have an account? Sign up</Text>
				</>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		fontFamily: "Roboto",
		fontSize: 20,
		color: "#333"
	}
});

export default Login;

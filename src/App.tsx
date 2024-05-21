import { FormProvider, useForm } from "react-hook-form";
import styled from 'styled-components';
import Button from '@mui/material/Button'

const Test = styled.div`
	color: blue;
`

const App = () => {
	const form = useForm();

	return (
		<>
			<FormProvider {...form}>
					React Hook form
			</FormProvider>
			<Test>
					Styled Components
			</Test>
			<Button>
				Mui
			</Button>
		</>
	)
}

export default App;
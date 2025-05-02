import styled from "styled-components";

export const SongDetailsStyled = styled.div`

	p {
		white-space: pre-wrap;
	}

	.content pre {
		font-family: ${({ theme }) => theme.fonts[1]};
	}

	h1 {
		margin-block: 0;
	}
`
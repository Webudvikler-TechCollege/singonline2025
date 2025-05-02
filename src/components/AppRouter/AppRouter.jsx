import { Routes, Route } from "react-router-dom"
import { HomePage } from "../../pages/HomePage/HomePage"
import { LoginPage } from "../../pages/LoginPage/LoginPage"
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage"
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage"
import { RequireAuth } from "../RequireAuth/RequireAuth"
import { SongDetails } from "../SongDetails/SongDetails"
import { ArtistPage } from "../../pages/ArtistPage/ArtistPage"
import { SongCreate } from "../../pages/Admin/Songs/SongCreate"
import { SongDelete } from "../../pages/Admin/Songs/SongDelete"
import { SongUpdate } from "../../pages/Admin/Songs/SongUpdate"
import { SetCreate } from "../../pages/Admin/Sets/SetCreate"
import { SetUpdate } from "../../pages/Admin/Sets/SetUpdate"
import { SetListPage } from "../../pages/Admin/Sets/SetListPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route element={<RequireAuth />}>
                <Route index element={<HomePage />} />
                <Route path=":id" element={<SongDetails />} />
                <Route path="/artist/:artist_id" element={<ArtistPage />} />

                <Route path="/admin">
                    <Route path="songs/create" element={<SongCreate />} />
                    <Route path="songs/update/:id" element={<SongUpdate />} />
                    <Route path="songs/delete/:id" element={<SongDelete />} />
                    <Route path="sets" element={<SetListPage />} />
                    <Route path="sets/create" element={<SetCreate />} />
                    <Route path="sets/update/:id" element={<SetUpdate />} />
                </Route>
                

                <Route path="/profile" element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
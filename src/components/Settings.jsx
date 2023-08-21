const Settings = () => {
    return (
        <form>
            <select name="difficulty">
                <option disabled defaultChecked>Select an option</option>
                <option value='random'>Random</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>

            <input type="range" name="amount" min="0" max="50" />
        </form>
    )
}

export default Settings

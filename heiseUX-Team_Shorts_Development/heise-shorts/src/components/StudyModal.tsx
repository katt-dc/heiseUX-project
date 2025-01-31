import './StudyModal.css';
import { useState } from 'react';


export default function StudyModal({ onSubmit }: { onSubmit: (age: number, gender: string, job: string, techInterest: boolean) => void }) {
    const [age, setAge] = useState<number>();
    const [gender, setGender] = useState<string>();
    const [job, setJob] = useState<string>();
    const [techInterest, setTechInterest] = useState<boolean>();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // console.log("Age: " + age + "Gender: " + gender + "Job: " + job + "Tech Interest: " + techInterest);
        onSubmit(age!, gender!, job!, techInterest!);
    }

    return (
        <>
            <div className="popup-overlay">
                <div className="popup-content">
                    <h2 className="mb-5 font-bold" >Willkommen bei unserer Usability-Studie</h2>

                    <div className="test-description">
                    Diese Studie, in Zusammenarbeit mit <span className="heise-logo">heise online</span>, entwickelt einen neuen Kurzformat-Nachrichtendienst. Klicken Sie sich durch die Anwendung und verschaffen Sie sich einen ersten Eindruck. Es gibt keine richtigen oder falschen Handlungen - wir sind an Ihrer natürlichen Interaktion interessiert.
                    </div>

                    <div className="privacy-notice">
                        Für die Auswertung erfassen wir einige anonyme demografische Daten und tracken Nutzerdaten.
                        Ihre Angaben werden vertraulich behandelt und ausschließlich für Forschungszwecke verwendet.
                    </div>

                    <form id="demographicForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="age">Alter:</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                placeholder="Bitte geben Sie Ihr Alter ein"
                                required
                                min="0"
                                max="120"
                                onChange={(event) => setAge(parseInt(event.target.value))}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">Geschlecht:</label>
                            <select id="gender" name="gender" required onChange={(event) => setGender(event.target.value)}>
                                <option value="">Bitte wählen</option>
                                <option value="male">Männlich</option>
                                <option value="female">Weiblich</option>
                                <option value="diverse">Divers</option>
                                <option value="no-answer">Keine Angabe</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="occupation">Beruf:</label>
                            <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                placeholder="Bitte geben Sie Ihren Beruf ein"
                                required
                                onChange={(event) => setJob(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Sind Sie technisch interessiert?</label>
                            <div className="radio-group" onChange={(event) => setTechInterest((event.target as HTMLInputElement).value === "yes")}>
                                <div className="radio-option">
                                    <input type="radio" id="tech-yes" name="tech_interest" value="yes" required />
                                    <label htmlFor="tech-yes">Ja</label>
                                </div>
                                <div className="radio-option">
                                    <input type="radio" id="tech-no" name="tech_interest" value="no" required />
                                    <label htmlFor="tech-no">Nein</label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">Mit der Studie beginnen</button>
                    </form>
                </div>
            </div>
        </>
    );
}
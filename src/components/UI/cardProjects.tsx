import Tilt from "react-parallax-tilt";

export const CardProject = () => {

    return (
        <Tilt tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            tiltReverse={false}
            glareEnable={true}
            glareMaxOpacity={1}>

            <div className="card">
                <h1>Hello</h1>
                <div className="body">
                    <h1>Hello</h1>
                </div>
            </div>

        </Tilt>
    )
}
import { publish } from "gh-pages";

try {
    publish(
        "./public",
        {
            branch: "main",
            dest: "market",
            repo: "https://github.com/crystallographer/crystallographer.github.io.git"
        },
        console.error
    );
} catch (error) {
    console.error(error);
}

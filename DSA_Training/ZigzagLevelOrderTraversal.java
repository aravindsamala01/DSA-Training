import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

public class ZigzagLevelOrderTraversal {

    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> results = new ArrayList<>();
        if (root == null) return results;

        Deque<TreeNode> nodeQueue = new LinkedList<>();
        nodeQueue.offer(root);
        boolean leftToRight = true;

        while (!nodeQueue.isEmpty()) {
            int levelSize = nodeQueue.size();
            List<Integer> currentLevel = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = nodeQueue.poll();

                // Depending on the flag, add to the current level list
                if (leftToRight) {
                    currentLevel.add(node.val);
                } else {
                    currentLevel.add(0, node.val); // Add to the beginning for reverse direction
                }

                // Add children to the queue
                if (node.left != null) {
                    nodeQueue.offer(node.left);
                }
                if (node.right != null) {
                    nodeQueue.offer(node.right);
                }
            }
            results.add(currentLevel);
            leftToRight = !leftToRight; // Toggle the direction for the next level
        }

        return results;
    }

    // Method to build a binary tree from an array of Integer values
    public static TreeNode buildTree(Integer[] values) {
        if (values.length == 0 || values[0] == null) return null;

        Queue<TreeNode> queue = new LinkedList<>();
        TreeNode root = new TreeNode(values[0]);
        queue.offer(root);
        int index = 1;

        while (!queue.isEmpty() && index < values.length) {
            TreeNode current = queue.poll();

            // Left child
            if (index < values.length && values[index] != null) {
                current.left = new TreeNode(values[index]);
                queue.offer(current.left);
            }
            index++;

            // Right child
            if (index < values.length && values[index] != null) {
                current.right = new TreeNode(values[index]);
                queue.offer(current.right);
            }
            index++;
        }

        return root;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of nodes: ");
        int n = scanner.nextInt();
        Integer[] values = new Integer[n];

        System.out.println("Enter the node values (use 'null' for missing nodes):");
        for (int i = 0; i < n; i++) {
            String value = scanner.next();
            values[i] = value.equals("null") ? null : Integer.parseInt(value);
        }

        // Build the tree
        TreeNode root = buildTree(values);

        // Perform zigzag level order traversal
        ZigzagLevelOrderTraversal solution = new ZigzagLevelOrderTraversal();
        List<List<Integer>> result = solution.zigzagLevelOrder(root);

        // Output the result
        System.out.println("Zigzag Level Order Traversal:");
        for (List<Integer> level : result) {
            System.out.println(level);
        }

        scanner.close();
    }
}
